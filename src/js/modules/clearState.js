const clearState = (state) => {  // Очищаем объект state
    for (let key in state) {
        delete state[key];
    }
}

export default clearState;
