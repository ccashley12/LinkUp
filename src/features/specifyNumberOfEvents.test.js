import React from "react";
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user has NOT specified a number, 32 events are shown by default.', ({ given, when, then }) => {
        given('user does NOT specify a number of events in a city', () => {

        });

        when('searching for events in that city', () => {

        });

        then('the user will recieve a list of 32 events in that city by default', () => {

        });
    });

    test('User can change the number of events displayed.', ({ given, when, then }) => {
        given('user specifies how many events to view', () => {

        });

        when('searching for events in a city', () => {

        });

        then('the specified amount of events will be displayed', () => {

        });
    });
});