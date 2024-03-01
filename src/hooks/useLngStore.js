import { useDispatch, useSelector } from "react-redux"
import { onSwitchLanguage } from "../store/lngSlice";
import { useTranslation } from "react-i18next";

export const useLngStore = () => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    const { actualLng } = useSelector( state => state.lng );

    const switchLanguage = (lng) => {
        dispatch( onSwitchLanguage(lng) )
        i18n.changeLanguage(lng)
    }

    return {
        // Propiedades
        actualLng,

        // Métodos
        switchLanguage
    }
}
