
import { OpenAIApi } from "openai";
import { Configuration } from "openai/dist/configuration";

const configuration = new Configuration({
          apiKey:process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);
export default openai;

