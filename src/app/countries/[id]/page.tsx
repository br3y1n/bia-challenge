import { configEnvs } from "@constants/config-envs.const";
import { CountryApiRepository } from "@country/repositories/implementations/country-api.repository";
import { Country } from "@country/views/Country";
import { createApiClient } from "@infrastructure/api/api-client.factory";

const generateStaticParams = async () => {
  const apiRepository = new CountryApiRepository(
    createApiClient(configEnvs.COUNTRY_API),
  );
  const countries = await apiRepository.getCountries({ name: "", region: "" });

  return countries.map(({ id }) => ({ id }));
};
const WrapperCountry = () => <Country />;

export { generateStaticParams };
export default WrapperCountry;
