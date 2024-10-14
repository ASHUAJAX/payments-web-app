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
    data: InputData[];
    setData: React.Dispatch<React.SetStateAction<InputData[]>>; 
}

function CustomInput({ data, setData }: CustomInputProps) {
    const onChangeFunc = (ev: React.ChangeEvent<HTMLInputElement>): void => {
        const { value, name } = ev.target;
        setData((prev: InputData[]) =>
            prev.map((elm: InputData) =>
                elm.name === name ? { ...elm, value } : elm
            )
        );
    };

    return (
        <>
            {data.map((elm) => (
                <div key={elm.name}>
                    {elm.label && <label className="label" htmlFor={elm.name}>{elm.label}</label>}
                    <input
                        className="input"
                        type={elm.type}
                        required={elm.required}
                        autoComplete="off"
                        placeholder={elm.placeholder}
                        onChange={onChangeFunc}
                        name={elm.name}
                        value={elm.value}
                    />
                    {elm.error && <p className="error">{elm.error}</p>}
                </div>
            ))}
        </>
    );
}

export default CustomInput;
