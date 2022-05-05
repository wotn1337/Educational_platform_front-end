import React, {useState} from 'react';
import s from './PuzzlesCreate.module.css';
import selectStyle from '../../CreateFragment/SelectType/SelectType.module.css'

const PuzzlesCreate = ({puzzleImage, cols, rows, setCols, setRows, setPuzzlesImage, ...props}) => {
    const [image, setImage] = useState(puzzleImage ? puzzleImage : undefined);
    const [imageSrc, setImageSrc] = useState(puzzleImage ? puzzleImage : undefined);
    const colsOptions = [];
    const rowsOptions = [];

    const optionTag = (id, selected) => {
        return <option value={id} selected={selected === id}>{id}</option>
    }

    for (let i = 1; i <= 10; i++) {
        colsOptions.push(optionTag(i, cols));
        rowsOptions.push(optionTag(i, rows));
    }

    return (
        <>
            <section className={s.createGame}>
                <div className={props.isEdit ? `${s.selectBlockWrapper} ${s.selectBlockWrapperEdit}`: s.selectBlockWrapper}>
                    <div className={s.selectBlock}>
                        <h3 style= {props.isEdit ? {color: "#EF5B5B"} : {}}>Выберите количество столбцов: </h3>
                        <select name="cols" id="cols" className={selectStyle.selectType}
                                onChange={e => {
                                    setCols(e.target.value)
                                }}>
                            {colsOptions}
                        </select>
                    </div>
                    <div className={s.selectBlock}>
                        <h3 style= {props.isEdit ? {color: "#EF5B5B"} : {}}>Выберите количество строк: </h3>
                        <select name="rows" id="rows" className={selectStyle.selectType}
                                onChange={e => {
                                    setRows(e.target.value)
                                }}>
                            {rowsOptions}
                        </select>
                    </div>

                </div>
                {!props.isEdit && <h3>Загрузите свое изображение:</h3>}
                <input
                    type="file"
                    accept={'image/*'}
                    id={'image'}
                    className={'hide'}
                    onChange={e => {
                        setImage(e.target.files[0]);
                        setImageSrc(URL.createObjectURL(e.target.files[0]));
                        setPuzzlesImage(e.target.files[0]);
                    }}
                />
                {image &&
                <div className={s.previewBlock}><img src={imageSrc} alt="fragment" className={s.preview}/></div>
                }
                <label htmlFor="image"
                       className={s.uploadBtn}>
                    <div className={s.plus}/>
                    {image ? 'Выбрать другое изображение' : 'Загрузить изображение'}
                </label>
            </section>
        </>
    );
};

export default PuzzlesCreate;