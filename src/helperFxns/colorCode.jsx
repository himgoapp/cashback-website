export const  colorBkg = (name) => {
    return name === "Poker Baazi" ? {"backgroundColor" : "#330099"} : name=== "MPL" ? {"backgroundColor" : "#d60f19"}:{"backgroundColor" : "white"}
}
export const  colorBkgOut = (name) => {
    return name === "Poker Baazi" ? {"backgroundColor" : "#3c2e8e"} : name=== "MPL" ? {"backgroundColor" : "#d62027"}:{"backgroundColor" : "white"}
}

export const  statusBaseColor = (status) => {
    return status === "Approved" ? {"color" : "green"} : status=== "Aborted" ? {"color" : "red"}:{"color" : "orange"}
}