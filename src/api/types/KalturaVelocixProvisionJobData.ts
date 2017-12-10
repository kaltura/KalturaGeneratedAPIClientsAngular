
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaProvisionJobData, KalturaProvisionJobDataArgs } from './KalturaProvisionJobData';

export interface KalturaVelocixProvisionJobDataArgs  extends KalturaProvisionJobDataArgs {
    provisioningParams? : KalturaKeyValue[];
	userName? : string;
	password? : string;
}


export class KalturaVelocixProvisionJobData extends KalturaProvisionJobData {

    provisioningParams : KalturaKeyValue[];
	userName : string;
	password : string;

    constructor(data? : KalturaVelocixProvisionJobDataArgs)
    {
        super(data);
        if (typeof this.provisioningParams === 'undefined') this.provisioningParams = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVelocixProvisionJobData' },
				provisioningParams : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' },
				userName : { type : 's' },
				password : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVelocixProvisionJobData',KalturaVelocixProvisionJobData);
