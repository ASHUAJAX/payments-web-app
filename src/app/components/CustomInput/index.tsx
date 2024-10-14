import "./CustomInput.scss";
interface InputData {
    placeholder: string;
    type: string;
    name: string;
    value: string;
    label?: string;
    error?: string;
    required: boolean;
}
interface CustomInputProps {
    data: InputData[]
    ,
    setData: any
}
function CustomInput({ data, setData }: CustomInputProps) {
    const onChangeFunc = (ev: any): void => {
        const { value, name } = ev.target;
        setData((prev: any) => prev.map((elm: any) =>
            elm.name === name ? { ...elm, value } : elm
        ));
    }

    return (
        <>
            {
                data.map((elm) => (
                    <>
                        {
                            elm.label && <label className="label" htmlFor={elm.name} >{elm.label}</label>
                        }
                        <input className="input" type={elm.type} required={elm.required} autoComplete="off" placeholder={elm.placeholder} onChange={onChangeFunc} name={elm.name} value={elm.value} />
                        {
                            elm.error && <p className="error">{elm.error}</p>
                        }
                    </>
                ))
            }

        </>
    )
}

export default CustomInput;