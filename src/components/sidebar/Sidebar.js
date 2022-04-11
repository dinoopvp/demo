import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import _ from "underscore";

import {
    HOTEL_FACILITIES,
    PRICE_PP_FILTER_OPTIONS,
    RATING_FILTER_OPTIONS
} from "../../config/constants";
import PricePerPerson from "./components/PricePerPerson";
import HotelFacilityFilterOptions from "./components/HotelFacilityFilterOptions";
import RatingFilterOptions from "./components/RatingFilterOptions";

function Sidebar(props) {
    return (
        <Accordion allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        PRICE(PP)
                </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    {
                        PRICE_PP_FILTER_OPTIONS.map((item, index) => {
                            return (
                                <PricePerPerson
                                    name={item.name}
                                    id={item.id}
                                    displayValue={item.displayValue}
                                    value={item.value}
                                    index={item.index}
                                    handleFilterPricePerPerson={props.handleFilterPricePerPerson}
                                />)
                        })
                    }

                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        HOTEL FACILITIES
                </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        {
                            _.map(HOTEL_FACILITIES, function (facility, index) {
                                return (
                                    <HotelFacilityFilterOptions
                                        name={facility}
                                        id={facility}
                                        value={facility}
                                        key={index}
                                        handleFilterFacility={props.handleFilterFacility}
                                    />
                                )
                            })
                        }
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        RATING
                </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    {
                        RATING_FILTER_OPTIONS.map((item, index) => {
                            return (
                                <RatingFilterOptions
                                    name={item.name}
                                    id={item.id}
                                    value={item.value}
                                    key={index}
                                    handleFilterRating={props.handleFilterRating}
                                />
                            )
                        })
                    }
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    )
}
export default Sidebar;