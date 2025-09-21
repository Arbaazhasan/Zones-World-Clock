import toast from "react-hot-toast";

export const addTimezoneController = (city, country, timezone) => {

    if (!city || !country || !timezone)
        return toast.error("Please enter all fields")

    let getTimezones = localStorage.getItem("zones");

    if (!getTimezones) {
        getTimezones = [{ city, country, timezone }]
        localStorage.setItem("zones", JSON.stringify(getTimezones));
        toast.success("Add Sucessfully")
        return;
    }

    getTimezones = JSON.parse(getTimezones);
    const isZoneExists = getTimezones.some((zone) => zone.timezone === timezone);

    if (isZoneExists)
        return toast.error("This timezone already exists!");

    let data = { city, country, timezone };
    getTimezones.push(data)
    localStorage.setItem("zones", JSON.stringify(getTimezones));
    toast.success("Add Sucessfully")

}


export const deleteCityController = (city) => {

    let data = localStorage.getItem("zones");

    if (!data)
        return toast.error("City does not exist!")

    data = JSON.parse(data);

    let newArray = data.filter((val) => val.city !== city)

    localStorage.setItem("zones", JSON.stringify(newArray));

    toast.success("Delete Successful")

}