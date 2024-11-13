import { signSmartContractData } from "@wert-io/widget-sc-signer";
import { encodeSafeMint } from "./contracts_signer";

export const POST = async ({request})=>{
    const body = await request.json();

    const sc_input_data = encodeSafeMint(to, tokenId, uri, fundsRecipient);
    



    return new Response(JSON.stringify({
    }))
}