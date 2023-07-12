import { useFormikContext } from 'formik';

import { SectionTitle } from './RecipePreparationFields.styled';

const RecipePreparationFields = () => {
    const { values, handleChange, handleBlur } = useFormikContext();

    return (
        <>
            <SectionTitle>Recipe Preparation</SectionTitle>
            <textarea
                name="preparation"
                placeholder="Enter recipe"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.preparation}
            ></textarea>
        </>
    );
};

export default RecipePreparationFields;
