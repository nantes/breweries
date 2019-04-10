export default (wreberies, value ) => {
    return wreberies.filter(wrebery => wrebery.name.toLowerCase().includes(value.toLowerCase()))
}
