export const randomRgbaColor = (opacity) => {
    const R = Math.round(Math.random() * 256);
    const G = Math.round(Math.random() * 256);
    const B = Math.round(Math.random() * 256);
    let color = `rgba(${R},${G},${B},${opacity})`;
    return color;
};
