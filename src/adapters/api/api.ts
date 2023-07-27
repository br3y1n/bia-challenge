const getData = async (name: string) => {
  try {
    const fields = "?fields=name,flags,region,capital,population,cca3";
    const url1 = "https://restcountries.com/v3.1/all";
    const url2 = `https://restcountries.com/v3.1/name/${name}`;
    const url = `${name === "" ? url1 : url2}${fields}`;
    const response = await fetch(url);

    if (!response.ok) throw Error;

    const data = await response.json();

    return data;
  } catch {
    return [];
  }
};

const getCountry = async (id: string) => {
  try {
    const fields =
      "?fields=name,flags,region,capital,population,cca3,subregion,tld,currencies,languages,borders";
    const url = `https://restcountries.com/v3.1/alpha/${id}${fields}`;
    const response = await fetch(url);

    if (!response.ok) throw Error;

    const data = await response.json();

    const borders = await Promise.all(
      data.borders.map((currentId: any) =>
        fetch(
          `https://restcountries.com/v3.1/alpha/${currentId}?fields=name,cca3`,
        ).then((response) => response.json()),
      ),
    );

    data.borders = borders.map(({ cca3, name }) => ({
      name: name.common,
      id: cca3,
    }));

    return data;
  } catch {}
};

export { getData, getCountry };
