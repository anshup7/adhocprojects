export default function cleanInput(inputs) {
    inputs = inputs
    .map(value => value.replaceAll("\r", ""))
    .filter(Boolean);
    inputs = inputs.map(value => value.split(" "));
    return inputs;
}
