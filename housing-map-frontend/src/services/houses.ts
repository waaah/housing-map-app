import { HouseData } from "@/types/house.data.type";
import data from '../../data/houses.json';

export const getHouses = (): HouseData[] => {
    return data as HouseData[];
}