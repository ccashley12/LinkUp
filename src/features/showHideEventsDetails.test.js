import React from "react";
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import mockData from '../mock-data';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        given('the user has not yet tapped on Show Details', () => {

        });

        when('the user is viewing the list of events', () => {

        });

        then('the app should hide the event details by default', () => {

        });
    });

    test('User can expand an event to see details.', ({ given, when, then }) => {
        given('the user is viewing the list of events', () => {

        });

        when('the user taps on a specific event', () => {

        });

        then('the app should display the details of that event', () => {

        });
    });

    test('User can collapse an event to hide details.', ({ given, when, then }) => {
        given('the user is viewing the details of an event', () => {

        });

        when('the user taps on the Hide Details option', () => {

        });

        then('the app should hide the event details and return to the event list', () => {

        });
    });
});