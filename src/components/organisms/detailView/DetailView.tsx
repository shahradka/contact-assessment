import { Avatar94 } from "@components/atoms/avatar";
import { Email15 } from "@components/atoms/icons/Email";
import { Phone15 } from "@components/atoms/icons/Phone";
import { Note } from "@components/atoms/note";
import { Text } from "@components/atoms/text";
import classNames from "classnames";
import React from "react";
import { CONTACT_TYPE } from "types/Contact";
import "./styles.scss";

const DetailView = ({first_name, last_name, avatar, phone, email, gender, address, telegram, company, note}:CONTACT_TYPE) => {

    return <div className="detail-view">
            <div className={classNames(["detail-view-inner", "grid grid-sm-col--8 grid-lg-col--4"])}>
            <Avatar94 url={avatar} />
            <div className={classNames(["grid-span-sm-col--3", "detail-view-person-info"])}>
                <Text componentType="div" variant="heading3" >
                    {`${first_name} ${last_name}`}
                </Text>
                <div className="detail-view-person-info-text">
                    <div className="detail-view-person-info-icon">
                        <Phone15 />
                    </div>
                    <Text>
                        {phone}
                    </Text>
                </div>
                <div className="detail-view-person-info-text">
                    <div className="detail-view-person-info-icon">
                        <Email15 />
                    </div>
                    <Text componentType="div">
                        {email}
                    </Text>
                </div>
            </div>
        </div>
        <hr />
        <div className="grid grid-sm-col--2 grid-lg-col--4">
            <Text componentType="div">
                Gender
            </Text>
            <Text componentType="div">
                {gender}
            </Text>
            <Text componentType="div">
                Address
            </Text>
            <Text componentType="div">
                {address}
            </Text>
            <Text componentType="div">
                Telegram
            </Text>
            <Text componentType="div">
                {telegram}
            </Text>
            <Text componentType="div">
                Company
            </Text>
            <Text componentType="div">
                {company}
            </Text>
            <Text className="grid-span-sm-col--2 grid-span-lg-col--4 detail-view-text" componentType="div">
                Note
            </Text>
            <Note className="grid-span-sm-col--2 grid-span-lg-col--4">
                {note}
            </Note>
        </div>
    </div>
    
}

export default DetailView;