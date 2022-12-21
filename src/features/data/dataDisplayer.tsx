import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { AppDispatch } from '../../app/store';

const DataDisplayer = () => {
    const AppDispatch = useAppDispatch()
    const data = useAppSelector(this.state. => state.data.data)
    const [dataPresent, setDataPresent] = useState<boolean>(false)


}