
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDrmLicenseAccessDetailsArgs  extends KalturaObjectBaseArgs {
    policy? : string;
	duration? : number;
	absolute_duration? : number;
	licenseParams? : KalturaKeyValue[];
}


export class KalturaDrmLicenseAccessDetails extends KalturaObjectBase {

    policy : string;
	duration : number;
	absolute_duration : number;
	licenseParams : KalturaKeyValue[];

    constructor(data? : KalturaDrmLicenseAccessDetailsArgs)
    {
        super(data);
        if (typeof this.licenseParams === 'undefined') this.licenseParams = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDrmLicenseAccessDetails' },
				policy : { type : 's' },
				duration : { type : 'n' },
				absolute_duration : { type : 'n' },
				licenseParams : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDrmLicenseAccessDetails',KalturaDrmLicenseAccessDetails);
