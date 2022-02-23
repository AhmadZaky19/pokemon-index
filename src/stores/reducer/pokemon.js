const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

const pokemon = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_DATA_POKEMON_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "GET_ALL_DATA_POKEMON_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.results,
      };
    }
    case "GET_ALL_DATA_POKEMON_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
      };
    }
    case "GET_DATA_POKEMON_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "GET_DATA_POKEMON_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data,
      };
    }
    case "GET_DATA_POKEMON_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default pokemon;
