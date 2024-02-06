import { useFrappeCreateDoc, useSWRConfig, keyInvalidator } from "./lib";


export const Test = () => {
    const {createDoc, error} = useFrappeCreateDoc({invalidateKeys: ["item-master-list"]})
    
	const onCreate = () => {
		createDoc("Warehouse", {
			warehouse_name: "w",
			warehouse_type: "Transit",
			company: "DLAD"
		}).then((res) => {
            // keyInvalidator(["item-master-list"])
		})
	}
    return (
        <button onClick={onCreate}>Create</button>
    )
}