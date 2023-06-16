import axios from "axios";

export default class CbrService {
    static async getDaily() {
        const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
        return response;
    }
}