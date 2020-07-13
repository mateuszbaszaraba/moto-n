const state = {
    cars: [],
    funds: 10000
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
        state.funds -= quantity * carPrice
    },
    'SELL_CARS' (state, {carId, quantity, carPrice}) {
        const record = state.cars.find(element => element.id == carId);
        if(record.quantity > quantity) {
            record.quantity -= quantity
        } else {
            state.cars.splice(state.cars.indexOf(record), 1)
        }
        state.funds += quantity * carPrice
    }
}

const actions = {
    buyCar: ({commit}, order) => {
        commit('BUY_CARS', order)
    },
    sellCar: ({commit}, order) => {
        commit('SELL_CARS', order)
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
    },
    funds(state) {
        return state.funds
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}