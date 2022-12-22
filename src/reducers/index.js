export default function (state, action) {
  switch (action.type) {
    case "rotate":
      return { rotate: action.payload };

    default:
      return state;
  }
}
