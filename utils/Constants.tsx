import { Dimensions } from "react-native";

export const screenHeight = Dimensions.get('screen').height
export const screenWidth = Dimensions.get('screen').width


export enum Colors {
    primary = '#1A1B28',
    secondary = '#222',
    tertiary = '#050404ff',
    text = '#fff',
    theme = '#0d3061'
}

export const gradientColors = ['rgba(0, 0, 0, 0.9)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)',]