const state = {
    cars: []
}

const mutations = {
    'BUY_CARS' (state, {carId, quantity, carPrice}) {
        const record = state.cars.find(element => element.id == carId);
        if(record) {
            record.quantity += quantity
        } else {
            state.cars.push({
                id: carId,
                quantity: quantity
            })
        }
    }
}

const actions = {
    buyCar: ({commit}, order) => {
        commit('BUY_CARS', order)
    }
}

const getters = {
    profileCars(state, getters) {
        return state.cars.map(car => {
            const record = getters.cars.find(element => element.id == car.id)
            return {
                id: car.id,
                quantity: car.quantity,
                name: record.name,
                price: record.price
            }
        })
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}