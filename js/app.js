// Elementos del formulario
var roomType = document.getElementById("roomType");
var spaOption = document.getElementById("spaOption");
var roomOccupation = document.getElementById("roomOccupation");
var roomNights = document.getElementById("roomNights");
var parkingNights = document.getElementById("parkingNights");
var reservationPrice = document.getElementById("reservationPrice");

//Recuperar valor campos formulario de entrada
var getRoomType = () => (roomType.value);
var getRoomOccupation = () => (roomOccupation.value);
var getRoomNights = () => (parseInt(roomNights.value));
var getParkingNights = () => (parseInt(parkingNights.value));
var getSpaOption = () => (spaOption.checked)

//Funciones de validacion campos del formulario entrada
var validRoomType = () => (getRoomType() == "" ? false : true);
var validRoomOccupation = () => (getRoomOccupation() == "" ? false : true);
var validNights = (field) => (isNaN(field) ? false : true);
var validReservationData = () => (validRoomType() && validRoomOccupation() && validNights(getRoomNights()) && validNights(getParkingNights()));

//Tarifa parking
const parkingRate = 10;

//Tarifas por tipo de habitacion
var roomTypeRate = {
    standard: 100,
    juniorsuite: 120,
    suite: 150}

//Tarifas por tipo de ocupacion
var roomOccupationRate = {
    individual: 0.75,
    double: 1,
    triple: 1.25}
    
//Tarifa uso SPA
var getSpaRate = () => (getSpaOption() ? 20 : 0);

//Visualiza el precio calculado para los parametros introuducidos (o mensaje de error)
function setMessage(message) {reservationPrice.innerText = message};

//Calcula y devuelve el precio de la reserva para parmetros introducidos
function priceCalculation() {
    return (((roomTypeRate[getRoomType()] + getSpaRate()) * roomOccupationRate[getRoomOccupation()]) * getRoomNights() + getParkingNights() * parkingRate);
}

//Controlador de los eventos lanzados desde el formulario
function handleReservation() {
    if (validReservationData()) 
        setMessage(priceCalculation() + "€");
    else
        setMessage("Debe completar los datos de la reserva");
}

//Asocia eventos a los elementos del formulario
document.getElementById("roomType").addEventListener("change", handleReservation);
document.getElementById("spaOption").addEventListener("change", handleReservation);
document.getElementById("roomOccupation").addEventListener("change", handleReservation);
document.getElementById("roomNights").addEventListener("change", handleReservation);
document.getElementById("parkingNights").addEventListener("change", handleReservation);
