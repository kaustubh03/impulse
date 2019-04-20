
import { getQuotes, addQuote } from "../controllers/quoteController";

const routes = (app) => {
    app.route("/quotes").get(getQuotes);
    app.route("/add").post(addQuote);
}

export default routes