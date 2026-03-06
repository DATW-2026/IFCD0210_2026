import { Company } from "./company-is.js";
import { Invoice } from "./invoice-is.js";

const myCompany = new Company(
    "Boracay",
    "c/ Pez",
    "29647283642",
    "665738638464Z",
);

const i1 = new Invoice(myCompany, new Company("Acme", "c/ Rana", "", "757477473X"));
i1.printInvoice()
