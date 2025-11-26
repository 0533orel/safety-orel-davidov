import React from "react";
import {Button} from "@mui/material";
import FormInput from "./common/FormInput.tsx";
import FormSelect from "./common/FormSelect.tsx";
import {useSafetyForm} from "../hooks/useSafetyForm.ts";
import {
    locationArr,
    resultsArr,
    injuriesLevelArr,
    categoryArr,
    personalActivityTypeArr,
    weatherArr,
    unitActivityTypeArr,
    eventSeverityArr,
} from "../data/formOptions.ts";
import {
    checkIfHasCasualties,
    checkEventVenue,
    formatDateTimeLocal
} from "../utils/formHelpers.tsx";

//////////////////////////////////////////////////////////////////////////////////

const SafetyForm: React.FC = () => {
    const {formData, handleChange, handleSubmit} = useSafetyForm();

    return (
        <form className="form-container" onSubmit={handleSubmit} style={{padding: '20px'}}>
            <h2 style={{textAlign: 'center', fontFamily: 'Arial, sans-serif'}}>דיווח אירוע בטיחות</h2>

            <FormInput
                label="יחידות משנה"
                name="unitName"
                value={formData.unitName}
                onChange={handleChange}
                placeholder="כתוב את שם היחידה"
                maxLength={40}
            />

            <FormInput
                label="תאריך ושעה"
                name="eventDate"
                type="datetime-local"
                value={formData.eventDate}
                onChange={handleChange}
                max={formatDateTimeLocal()}
            />

            <FormSelect
                name="location"
                label="מקום האירוע"
                value={formData.location}
                options={locationArr}
                onChange={handleChange}
            />

            {checkEventVenue(formData.location) && (
                <FormInput
                    name="coordinates"
                    label='נ"צ (נקודת ציון)'
                    value={formData.coordinates || ""}
                    onChange={handleChange}
                    placeholder="123456/810000"
                />
            )}

            <FormInput
                label="תיאור האירוע (עד 800 תווים)"
                name="description"
                value={formData.description}
                onChange={handleChange}
                multiline
                rows={4}
                maxLength={800}
                fullWidth
            />

            <FormSelect
                name="result"
                label="תוצאות האירוע"
                value={formData.result}
                options={resultsArr}
                onChange={handleChange}
                required
            />

            {checkIfHasCasualties(formData.result) && (
                <FormSelect
                    name="injurySeverity"
                    label="חומרת הפגיעה"
                    value={formData.injurySeverity || "בחר/י"}
                    options={injuriesLevelArr}
                    onChange={handleChange}
                />
            )}

            <FormSelect
                name="unitActivity"
                label="מאפיין פעילות היחידה"
                value={formData.unitActivity}
                options={unitActivityTypeArr}
                onChange={handleChange}
                required
            />

            <FormSelect
                name="personalActivity"
                label="מאפיין פעילות הפרט"
                value={formData.personalActivity}
                options={personalActivityTypeArr}
                onChange={handleChange}
                required
            />

            <FormSelect
                name="category"
                label="קטגוריה"
                value={formData.category}
                options={categoryArr}
                onChange={handleChange}
                required
            />

            <FormSelect
                name="weather"
                label="מזג אוויר"
                value={formData.weather}
                options={weatherArr}
                onChange={handleChange}
                required
            />

            <FormSelect
                name="eventSeverity"
                label="חומרת האירוע"
                value={formData.eventSeverity}
                options={eventSeverityArr}
                onChange={handleChange}
                required
            />

            <FormInput
                label="המלצות ראשוניות (עד 800 תווים)"
                name="recommendations"
                value={formData.recommendations}
                onChange={handleChange}
                multiline
                rows={4}
                maxLength={800}
            />


            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{marginTop: 3, fontSize: '1.1rem'}}
            >
                שמור אירוע
            </Button>

        </form>
    );
};

export default SafetyForm;