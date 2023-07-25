import createCache, { EmotionCache, Options } from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";
import IThemeRegistryProps from "../ThemeRegistry.interfaces";
import IUseThemeRegistryState from "./useThemeRegistryState.interfaces";

const getCache = (options: Options) => () => {
  const cache = createCache(options);
  const inserted: string[] = [];
  const prevInsert = cache.insert;

  cache.compat = true;

  cache.insert = (...args) => {
    const { name: serializedName } = args[1];

    if (cache.inserted[serializedName] === undefined)
      inserted.push(serializedName);

    return prevInsert(...args);
  };

  const flush = () => inserted.splice(0, inserted.length);

  return { cache, flush };
};

const getServerStyles = (cache: EmotionCache, flush: () => string[]) => () => {
  const names = flush();
  const hasNames = names.length > 0;
  const styles = names.map((name) => cache.inserted[name]).join("");

  return hasNames ? (
    <style
      key={cache.key}
      data-emotion={`${cache.key} ${names.join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: styles,
      }}
    />
  ) : null;
};

const useThemeRegistryState = ({
  options,
  children,
}: IThemeRegistryProps): IUseThemeRegistryState => {
  const [{ cache, flush }] = useState(getCache(options));

  useServerInsertedHTML(getServerStyles(cache, flush));

  return { cache, children };
};

export default useThemeRegistryState;
