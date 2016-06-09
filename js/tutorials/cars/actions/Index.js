export function selectCar(car) {
    // selectCar is an ActionCreator which needs to return an Action - an object with type property
    return {
        type: 'CAR_SELECTED',
        payload: car
    };
}