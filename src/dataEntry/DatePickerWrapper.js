import styled from 'styled-components';
import { theme } from '../helpers';

const DatePickerWrapper = styled.div`
    .CalendarDay {
        border: 1px solid #e4e7e7;
        padding: 0;
        box-sizing: border-box;
        color: #565a5c;
        cursor: pointer;
    }

    .CalendarDay__button {
        position: relative;
        height: 100%;
        width: 100%;
        text-align: center;
        background: none;
        border: 0;
        margin: 0;
        padding: 0;
        color: inherit;
        font: inherit;
        line-height: normal;
        overflow: visible;
        cursor: pointer;
        box-sizing: border-box;
    }
    .CalendarDay__button:active {
        outline: 0;
    }

    .CalendarDay--highlighted-calendar {
        background: #ffe8bc;
        color: #565a5c;
        cursor: default;
    }
    .CalendarDay--highlighted-calendar:active {
        background: #007a87;
    }

    .CalendarDay--outside {
        border: 0;
        cursor: default;
    }
    .CalendarDay--outside:active {
        background: #fff;
    }

    .CalendarDay--hovered {
        background: #e4e7e7;
        border: 1px double #d4d9d9;
        color: inherit;
    }

    .CalendarDay--blocked-minimum-nights {
        color: #cacccd;
        background: #fff;
        border: 1px solid #e4e7e7;
        cursor: default;
    }
    .CalendarDay--blocked-minimum-nights:active {
        background: #fff;
    }

    .CalendarDay--selected-span {
        background: #66e2da;
        border: 1px double #33dacd;
        color: #fff;
    }
    .CalendarDay--selected-span.CalendarDay--hovered,
    .CalendarDay--selected-span:active {
        background: #33dacd;
        border: 1px double ${props => theme(props, 'primary')};
    }
    .CalendarDay--selected-span.CalendarDay--last-in-range {
        border-right: ${props => theme(props, 'primary')};
    }

    .CalendarDay--hovered-span,
    .CalendarDay--after-hovered-start {
        background: #b2f1ec;
        border: 1px double #80e8e0;
        color: ${props => theme(props, 'textColor')};
    }
    .CalendarDay--hovered-span:active,
    .CalendarDay--after-hovered-start:active {
        background: #80e8e0;
    }

    .CalendarDay--selected-start,
    .CalendarDay--selected-end,
    .CalendarDay--selected {
        background: ${props => theme(props, 'primary')};
        border: 1px double ${props => theme(props, 'primary')};
        color: #fff;
    }
    .CalendarDay--selected-start:active,
    .CalendarDay--selected-end:active,
    .CalendarDay--selected:active {
        background: ${props => theme(props, 'primary')};
    }

    .CalendarDay--blocked-calendar {
        background: #cacccd;
        color: ${props => theme(props, 'textColor')};
        cursor: default;
    }
    .CalendarDay--blocked-calendar:active {
        background: #cacccd;
    }

    .CalendarDay--blocked-out-of-range {
        color: #cacccd;
        background: #fff;
        border: 1px solid #e4e7e7;
        cursor: default;
    }
    .CalendarDay--blocked-out-of-range:active {
        background: #fff;
    }

    .CalendarMonth {
        text-align: center;
        padding: 0 13px;
        vertical-align: top;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .CalendarMonth table {
        border-collapse: collapse;
        border-spacing: 0;
        caption-caption-side: initial;
    }

    .CalendarMonth--horizontal:first-of-type,
    .CalendarMonth--vertical:first-of-type {
        position: absolute;
        z-index: -1;
        opacity: 0;
        pointer-events: none;
    }

    .CalendarMonth--horizontal {
        display: inline-block;
        min-height: 100%;
    }

    .CalendarMonth--vertical {
        display: block;
    }

    .CalendarMonth__caption {
        color: ${props => theme(props, 'textColor')};
        margin-top: 7px;
        font-size: 18px;
        text-align: center;
        margin-bottom: 2px;
        caption-side: initial;
    }

    .CalendarMonth--horizontal .CalendarMonth__caption,
    .CalendarMonth--vertical .CalendarMonth__caption {
        padding: 15px 0 35px;
    }

    .CalendarMonth--vertical-scrollable .CalendarMonth__caption {
        padding: 5px 0;
    }

    .CalendarMonthGrid {
        background: #fff;
        z-index: 0;
        text-align: left;
    }

    .CalendarMonthGrid--animating {
        -webkit-transition: -webkit-transform 0.2s ease-in-out;
        -moz-transition: -moz-transform 0.2s ease-in-out;
        transition: transform 0.2s ease-in-out;
        z-index: 1;
    }

    .CalendarMonthGrid--horizontal {
        position: absolute;
        left: 9px;
    }

    .CalendarMonthGrid--vertical {
        margin: 0 auto;
    }

    .CalendarMonthGrid--vertical-scrollable {
        margin: 0 auto;
        overflow-y: scroll;
    }

    .DayPicker {
        background: #fff;
        position: relative;
        text-align: left;
    }

    .DayPicker--horizontal {
        background: #fff;
        box-shadow: 0 0 0 1px #ccc;
        border-radius: 3px;
    }
    .DayPicker--horizontal.DayPicker--portal {
        box-shadow: none;
        position: absolute;
        left: 50%;
        top: 50%;
    }

    .DayPicker--vertical.DayPicker--portal {
        position: initial;
    }

    .DayPicker__focus-region {
        outline: none;
    }

    .DayPicker__week-headers {
        position: relative;
    }

    .DayPicker--horizontal .DayPicker__week-headers {
        margin-left: 9px;
    }

    .DayPicker__week-header {
        color: #757575;
        position: absolute;
        top: 62px;
        z-index: 2;
        padding: 0 13px;
        text-align: left;
    }
    .DayPicker__week-header ul {
        list-style: none;
        margin: 1px 0;
        padding-left: 0;
        padding-right: 0;
    }
    .DayPicker__week-header li {
        display: inline-block;
        text-align: center;
    }

    .DayPicker--vertical .DayPicker__week-header {
        left: 50%;
    }

    .DayPicker--vertical-scrollable {
        height: 100%;
    }
    .DayPicker--vertical-scrollable .DayPicker__week-header {
        top: 0;
        display: table-row;
        border-bottom: 1px solid #dbdbdb;
        background: white;
    }
    .DayPicker--vertical-scrollable .transition-container--vertical {
        padding-top: 20px;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        overflow-y: scroll;
    }
    .DayPicker--vertical-scrollable .DayPicker__week-header {
        margin-left: 0;
        left: 0;
        width: 100%;
        text-align: center;
    }

    .transition-container {
        position: relative;
        overflow: hidden;
        border-radius: 3px;
    }

    .transition-container--horizontal {
        transition: height 0.2s ease-in-out;
    }

    .transition-container--vertical {
        width: 100%;
    }

    .DayPickerNavigation__prev,
    .DayPickerNavigation__next {
        cursor: pointer;
        line-height: 0.78;
        -webkit-user-select: none;
        /* Chrome/Safari */
        -moz-user-select: none;
        /* Firefox */
        -ms-user-select: none;
        /* IE10+ */
        user-select: none;
    }

    .DayPickerNavigation__prev--default,
    .DayPickerNavigation__next--default {
        border: 1px solid #dce0e0;
        background-color: #fff;
        color: #757575;
    }
    .DayPickerNavigation__prev--default:focus,
    .DayPickerNavigation__prev--default:hover,
    .DayPickerNavigation__next--default:focus,
    .DayPickerNavigation__next--default:hover {
        border: 1px solid #c4c4c4;
    }
    .DayPickerNavigation__prev--default:active,
    .DayPickerNavigation__next--default:active {
        background: #f2f2f2;
    }

    .DayPickerNavigation--horizontal {
        position: relative;
    }
    .DayPickerNavigation--horizontal .DayPickerNavigation__prev,
    .DayPickerNavigation--horizontal .DayPickerNavigation__next {
        border-radius: 3px;
        padding: 6px 9px;
        top: 18px;
        z-index: 2;
        position: absolute;
    }
    .DayPickerNavigation--horizontal .DayPickerNavigation__prev {
        left: 22px;
    }

    .DayPickerNavigation--horizontal .DayPickerNavigation__next {
        right: 22px;
    }
    .DayPickerNavigation--horizontal .DayPickerNavigation__prev--default svg,
    .DayPickerNavigation--horizontal .DayPickerNavigation__next--default svg {
        height: 19px;
        width: 19px;
        fill: ${props => theme(props, 'textColor')};
    }

    .DayPickerNavigation--vertical {
        background: #fff;
        box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
        position: absolute;
        bottom: 0;
        left: 0;
        height: 52px;
        width: 100%;
        z-index: 2;
    }
    .DayPickerNavigation--vertical .DayPickerNavigation__prev,
    .DayPickerNavigation--vertical .DayPickerNavigation__next {
        display: inline-block;
        position: relative;
        height: 100%;
        width: 50%;
    }
    .DayPickerNavigation--vertical .DayPickerNavigation__next--default {
        border-left: 0;
    }
    .DayPickerNavigation--vertical .DayPickerNavigation__prev--default,
    .DayPickerNavigation--vertical .DayPickerNavigation__next--default {
        text-align: center;
        font-size: 2.5em;
        padding: 5px;
    }
    .DayPickerNavigation--vertical .DayPickerNavigation__prev--default svg,
    .DayPickerNavigation--vertical .DayPickerNavigation__next--default svg {
        height: 42px;
        width: 42px;
        fill: ${props => theme(props, 'textColor')};
    }

    .DayPickerNavigation--vertical-scrollable {
        position: relative;
    }
    .DayPickerNavigation--vertical-scrollable .DayPickerNavigation__next {
        width: 100%;
    }

    .DayPickerKeyboardShortcuts__show,
    .DayPickerKeyboardShortcuts__close {
        background: none;
        border: 0;
        color: inherit;
        font: inherit;
        line-height: normal;
        overflow: visible;
        padding: 0;
        cursor: pointer;
    }
    .DayPickerKeyboardShortcuts__show:active,
    .DayPickerKeyboardShortcuts__close:active {
        outline: none;
    }

    .DayPickerKeyboardShortcuts__show {
        width: 22px;
        position: absolute;
        z-index: 2;
    }

    .DayPickerKeyboardShortcuts__show--bottom-right {
        border-top: 26px solid transparent;
        border-right: 33px solid ${props => theme(props, 'primary')};
        bottom: 0;
        right: 0;
    }
    .DayPickerKeyboardShortcuts__show--bottom-right:hover {
        border-right: 33px solid #008489;
    }
    .DayPickerKeyboardShortcuts__show--bottom-right
        .DayPickerKeyboardShortcuts__show_span {
        bottom: 0;
        right: -28px;
    }

    .DayPickerKeyboardShortcuts__show--top-right {
        border-bottom: 26px solid transparent;
        border-right: 33px solid ${props => theme(props, 'primary')};
        top: 0;
        right: 0;
    }
    .DayPickerKeyboardShortcuts__show--top-right:hover {
        border-right: 33px solid #008489;
    }
    .DayPickerKeyboardShortcuts__show--top-right
        .DayPickerKeyboardShortcuts__show_span {
        top: 1px;
        right: -28px;
    }

    .DayPickerKeyboardShortcuts__show--top-left {
        border-bottom: 26px solid transparent;
        border-left: 33px solid ${props => theme(props, 'primary')};
        top: 0;
        left: 0;
    }
    .DayPickerKeyboardShortcuts__show--top-left:hover {
        border-left: 33px solid #008489;
    }
    .DayPickerKeyboardShortcuts__show--top-left
        .DayPickerKeyboardShortcuts__show_span {
        top: 1px;
        left: -28px;
    }

    .DayPickerKeyboardShortcuts__show_span {
        color: #fff;
        position: absolute;
    }

    .DayPickerKeyboardShortcuts__panel {
        overflow: auto;
        background: #fff;
        border: 1px solid #dbdbdb;
        border-radius: 2px;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 2;
        padding: 22px;
        margin: 33px;
    }

    .DayPickerKeyboardShortcuts__title {
        font-size: 14px;
        font-weight: bold;
        margin: 0;
    }

    .DayPickerKeyboardShortcuts__list {
        list-style: none;
        padding: 0;
    }

    .DayPickerKeyboardShortcuts__close {
        position: absolute;
        right: 22px;
        top: 22px;
        z-index: 2;
    }
    .DayPickerKeyboardShortcuts__close svg {
        height: 15px;
        width: 15px;
        fill: #cacccd;
    }
    .DayPickerKeyboardShortcuts__close svg:hover,
    .DayPickerKeyboardShortcuts__close svg:focus {
        fill: ${props => theme(props, 'textColor')};
    }
    .DayPickerKeyboardShortcuts__close:active {
        outline: none;
    }

    .KeyboardShortcutRow {
        margin: 6px 0;
    }

    .KeyboardShortcutRow__key-container {
        display: inline-block;
        white-space: nowrap;
        text-align: right;
        margin-right: 6px;
    }

    .KeyboardShortcutRow__key {
        font-family: monospace;
        font-size: 12px;
        text-transform: uppercase;
        background: #f2f2f2;
        padding: 2px 6px;
    }

    .KeyboardShortcutRow__action {
        display: inline;
        word-break: break-word;
        margin-left: 8px;
    }

    .DayPickerKeyboardShortcuts__panel--block .KeyboardShortcutRow {
        margin-bottom: 16px;
    }

    .DayPickerKeyboardShortcuts__panel--block
        .KeyboardShortcutRow__key-container {
        width: auto;
        text-align: left;
        display: inline;
    }

    .DayPickerKeyboardShortcuts__panel--block .KeyboardShortcutRow__action {
        display: inline;
    }

    .DateInput {
        font-weight: 400;
        font-size: 14px;
        height: 28px;
        line-height: 24px;
        color: #757575;
        margin: 0;
        padding: 0 0 0 8px;
        background: #fff;
        border-radius: 4px;
        position: relative;
        display: inline-block;
        width: 126px;
        vertical-align: middle;
    }

    .SingleDatePickerInput .DateInput {
        width: 100%;
    }

    .DateInput--with-caret::before,
    .DateInput--with-caret::after {
        content: '';
        display: inline-block;
        position: absolute;
        bottom: auto;
        border: 10px solid transparent;
        left: 22px;
        z-index: 2;
    }

    .DateInput--open-down.DateInput--with-caret::before,
    .DateInput--open-down.DateInput--with-caret::after {
        border-top: 0;
    }

    .DateInput--open-down.DateInput--with-caret::before {
        top: 36px;
        border-bottom-color: #ccc;
    }

    .DateInput--open-down.DateInput--with-caret::after {
        top: 37px;
        border-bottom-color: #fff;
    }

    .DateInput--open-up.DateInput--with-caret::before,
    .DateInput--open-up.DateInput--with-caret::after {
        border-bottom: 0;
    }

    .DateInput--open-up.DateInput--with-caret::before {
        top: -24px;
        border-top-color: rgba(0, 0, 0, 0.1);
    }

    .DateInput--open-up.DateInput--with-caret::after {
        top: -25px;
        border-top-color: #fff;
    }

    .DateInput--disabled {
        background: #f9f9f9;
    }

    .DateInput__input {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        border: 0;
        height: 100%;
        width: 100%;
    }
    .DateInput__input[readonly] {
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .DateInput__display-text {
        padding: 2px 0;
        white-space: nowrap;
        overflow: hidden;
    }

    .DateInput__display-text--has-input {
        color: ${props => theme(props, 'textColor')};
    }

    .DateInput__display-text--focused {
        background: transparent;
        border-color: #99ede6;
        border-radius: 4px;
        color: ${props => theme(props, 'textColor')};
    }

    .screen-reader-only {
        border: 0;
        clip: rect(0, 0, 0, 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }

    .DateRangePicker {
        position: relative;
        display: inline-block;
    }

    .DateRangePicker__picker {
        z-index: 1;
        background-color: #fff;
        position: absolute;
    }

    .DateRangePicker__picker--direction-left {
        left: 0;
    }

    .DateRangePicker__picker--direction-right {
        right: 0;
    }

    .DateRangePicker__picker--open-down {
        top: 72px;
    }

    .DateRangePicker__picker--open-up {
        bottom: 72px;
    }

    .DateRangePicker__picker--portal {
        background-color: rgba(0, 0, 0, 0.3);
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }

    .DateRangePicker__picker--full-screen-portal {
        background-color: #fff;
    }

    .DateRangePicker__close {
        background: none;
        border: 0;
        color: inherit;
        font: inherit;
        line-height: normal;
        overflow: visible;
        padding: 0;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        padding: 15px;
        z-index: 2;
    }
    .DateRangePicker__close svg {
        height: 15px;
        width: 15px;
        fill: #cacccd;
    }
    .DateRangePicker__close:hover,
    .DateRangePicker__close:focus {
        color: #b0b3b4;
        text-decoration: none;
    }

    .SingleDatePickerInput,
    .DateRangePickerInput {
        border-radius: 4px;
        border: 1px solid
            ${props => (props.focused ? theme(props, 'primary') : '#ccc')};
    }

    .DateRangePickerInput {
        display: inline-block;
    }

    .DateRangePickerInput--disabled {
        background: #f9f9f9;
    }

    .DateRangePickerInput__arrow {
        display: inline-block;
        vertical-align: middle;
    }

    .DateRangePickerInput__arrow svg {
        vertical-align: middle;
        fill: ${props => theme(props, 'textColor')};
        height: 20px;
        width: 20px;
    }

    .DateRangePickerInput__clear-dates {
        background: none;
        border: 0;
        color: inherit;
        font: inherit;
        line-height: normal;
        overflow: visible;
        cursor: pointer;
        display: inline-block;
        vertical-align: middle;
        padding: 0px;
        margin: 0 10px 0 0;
    }

    .DateRangePickerInput__clear-dates svg {
        fill: ${props => theme(props, 'textColor')};
        height: 12px;
        width: 15px;
        vertical-align: middle;
    }

    .DateRangePickerInput__clear-dates--hide {
        visibility: hidden;
    }

    .DateRangePickerInput__clear-dates:focus,
    .DateRangePickerInput__clear-dates--hover {
        background: #dbdbdb;
        border-radius: 50%;
    }

    .DateRangePickerInput__calendar-icon {
        background: none;
        border: 0;
        color: inherit;
        font: inherit;
        line-height: normal;
        overflow: visible;
        cursor: pointer;
        display: inline-block;
        vertical-align: middle;
        padding: 10px;
        margin: 0 5px 0 10px;
    }
    .DateRangePickerInput__calendar-icon svg {
        fill: ${props => theme(props, 'textColor')};
        height: 15px;
        width: 14px;
        vertical-align: middle;
    }

    .SingleDatePicker {
        position: relative;
        display: inline-block;
    }

    .SingleDatePicker,
    .DateRangePickerInput {
        width: 100%;
        font-size: 14px;
    }

    .SingleDatePicker__picker {
        z-index: 1;
        background-color: #fff;
        position: absolute;
    }

    .SingleDatePicker__picker--direction-left {
        left: 0;
    }

    .SingleDatePicker__picker--direction-right {
        right: 0;
    }

    .SingleDatePicker__picker--open-down {
        top: 48px;
    }

    .SingleDatePicker__picker--open-up {
        bottom: 48px;
    }

    .SingleDatePicker__picker--portal {
        background-color: rgba(0, 0, 0, 0.3);
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }

    .SingleDatePicker__picker--full-screen-portal {
        background-color: #fff;
    }

    .SingleDatePicker__close {
        background: none;
        border: 0;
        color: inherit;
        font: inherit;
        line-height: normal;
        overflow: visible;
        padding: 0;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        padding: 15px;
        z-index: 2;
    }
    .SingleDatePicker__close svg {
        height: 15px;
        width: 15px;
        fill: #cacccd;
    }
    .SingleDatePicker__close:hover,
    .SingleDatePicker__close:focus {
        color: #b0b3b4;
        text-decoration: none;
    }

    .SingleDatePickerInput__clear-date {
        background: none;
        border: 0;
        color: inherit;
        font: inherit;
        line-height: normal;
        overflow: visible;
        cursor: pointer;
        display: inline-block;
        vertical-align: middle;
        padding: 10px;
        margin: 0 10px 0 5px;
    }

    .SingleDatePickerInput__clear-date svg {
        fill: ${props => theme(props, 'textColor')};
        height: 12px;
        width: 15px;
        vertical-align: middle;
    }

    .SingleDatePickerInput__clear-date--hide {
        visibility: hidden;
    }

    .SingleDatePickerInput__clear-date:focus,
    .SingleDatePickerInput__clear-date--hover {
        background: #dbdbdb;
        border-radius: 50%;
    }

    .SingleDatePickerInput__calendar-icon {
        background: none;
        border: 0;
        color: inherit;
        font: inherit;
        line-height: normal;
        overflow: visible;
        cursor: pointer;
        display: inline-block;
        vertical-align: middle;
        padding: 10px;
        margin: 0 5px 0 10px;
    }
    .SingleDatePickerInput__calendar-icon svg {
        fill: ${props => theme(props, 'textColor')};
        height: 15px;
        width: 14px;
        vertical-align: middle;
    }
`;

export default DatePickerWrapper;
