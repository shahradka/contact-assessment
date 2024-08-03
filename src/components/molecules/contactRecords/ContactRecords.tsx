import React, { useState } from "react";
import "./styles.scss";
import { Avatar30 } from "@components/atoms/avatar";
import { Text } from "@components/atoms/text";
import { Button } from "@components/atoms/button";
import { ChevronDown15, ChevronUp15 } from "@components/atoms/icons/Chevron";
import classNames from "classnames";

interface IContactRecords {
    items?:Array<{
        avatarUrl?:string
        name?:string
        id:number
    }>
}

const ContactRecords = ({items}:IContactRecords) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleToggle = () => {
            setIsOpen(!isOpen);
    }

    return <div className="contact-record">
                <div className={classNames(["contact-record-inner-mask", {["close"]:!isOpen}])}>
                    <div className="contact-record-inner">
                        <div className="grid grid-sm-col--4 grid-lg-col--4">
                            {items?.map((item) => <Button key={`ContactRecords_${item.id}`} size="large" className="contact-record-item">
                                        <Avatar30 url={item.avatarUrl || ""} />
                                        <Text className="contact-record-item-text" color="gray" variant="small">{item.name}</Text>
                                    </Button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="contact-record-placeholder-toggle-btn">
                    <div className="contact-record-placeholder-toggle-btn-inner">
                        <Button onClick={handleToggle} size="tiny" color="transparent" className="contact-record-toggle-btn">
                            {isOpen? <ChevronUp15 /> : <ChevronDown15 />}
                        </Button>
                    </div>
                </div>
        </div>

}

export default ContactRecords;