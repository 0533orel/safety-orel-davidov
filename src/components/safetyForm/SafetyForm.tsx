import {
    locationArr,
    resultsArr,
    injuriesLevelArr,
    categoryArr,
    personalActivityTypeArr,
    weatherArr,
    unitActivityTypeArr,
    eventSeverityArr,
} from "../../data/formOptions.ts";
import * as React from "react";
import {
    renderOptions,
    maxEventDate,
    checkIfHasCasualties
} from "../../utils/formHelpers.tsx";
import {useSafetyForm} from "../../hooks/useSafetyForm.ts";


const SafetyForm: React.FC = () => {
    const {formData, handleChange, handleSubmit} = useSafetyForm();

    return (
        <form className="form-container"
              onSubmit={handleSubmit}
        >
            <h2>דיווח אירוע בטיחות</h2>
            <div className="unitName">
                <label htmlFor="unitName">יחידות משנה</label>
                <input
                    type="text"
                    id="unitName"
                    name="unitName"
                    value={formData.unitName}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className='eventDate'>
                <label htmlFor="eventDate">תאריך ושעה</label>
                <input
                    type="datetime-local"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    max={maxEventDate}
                    required
                />
            </div>


            <div className="location">
                <label htmlFor="location">מיקום האירוע</label>
                <select
                    name="location"
                    id="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                >
                    {renderOptions(locationArr)}
                </select>
            </div>


            <div className='description'>
                <label htmlFor="description">תיאור האירוע</label>
                <textarea
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                    maxLength={800}
                    rows={3}
                    placeholder='תיאור האירוע (עד 800 תווים)'
                    required
                />
            </div>

            <div className='result'>
                <label htmlFor="result">תוצאות האירוע</label>
                <select
                    name="result"
                    id="result"
                    value={formData.result}
                    onChange={handleChange}
                    required
                >
                    {renderOptions(resultsArr)}
                </select>
            </div>

            {checkIfHasCasualties(formData.result) && (
                <div className='injurySeverity'>
                    <label htmlFor="injurySeverity">חומרת הפגיעה</label>
                    <select
                        name="injurySeverity"
                        id="injurySeverity"
                        value={formData.injurySeverity}
                        onChange={handleChange}
                        required
                    >
                        {renderOptions(injuriesLevelArr)}
                    </select>
                </div>
            )}


            <div className='unitActivity'>
                <label htmlFor="unitActivity">מאפיין פעילות היחידה</label>
                <select
                    name="unitActivity"
                    id="unitActivity"
                    value={formData.unitActivity}
                    onChange={handleChange}
                    required
                >
                    {renderOptions(unitActivityTypeArr)}
                </select>
            </div>

            <div className='personalActivity'>
                <label htmlFor="personalActivity">מאפיין פעילות הפרט</label>
                <select
                    name="personalActivity"
                    id="personalActivity"
                    value={formData.personalActivity}
                    onChange={handleChange}
                    required
                >
                    {renderOptions(personalActivityTypeArr)}
                </select>
            </div>

            <div className='category'>
                <label htmlFor="category">קטגוריה</label>
                <select
                    name="category"
                    id="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                >
                    {renderOptions(categoryArr)}
                </select>
            </div>

            <div className='weather'>
                <label htmlFor="weather">מזג אוויר</label>
                <select
                    name="weather"
                    id="weather"
                    value={formData.weather}
                    onChange={handleChange}
                    required
                >
                    {renderOptions(weatherArr)}
                </select>
            </div>

            <div className="eventSeverity">
                <label htmlFor="eventSeverity">חומרת האירוע</label>
                <select
                    name="eventSeverity"
                    id="eventSeverity"
                    value={formData.eventSeverity}
                    onChange={handleChange}
                    required
                >
                    {renderOptions(eventSeverityArr)}
                </select>
            </div>


            <div className='recommendations'>
                <label htmlFor="recommendations">המלצות ראשוניות</label>
                <textarea
                    name="recommendations"
                    id="recommendations"
                    value={formData.recommendations}
                    onChange={handleChange}
                    maxLength={800}
                    rows={3}
                    placeholder='המלצות ראשוניות (עד 800 תווים)'
                    required
                />
            </div>

            <button
                className="submit-btn"
                type="submit"
            >
                שלח טופס
            </button>

        </form>
    );
};


export default SafetyForm