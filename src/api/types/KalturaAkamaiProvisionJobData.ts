
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaProvisionJobData, KalturaProvisionJobDataArgs } from './KalturaProvisionJobData';

export interface KalturaAkamaiProvisionJobDataArgs  extends KalturaProvisionJobDataArgs {
    wsdlUsername? : string;
	wsdlPassword? : string;
	cpcode? : string;
	emailId? : string;
	primaryContact? : string;
	secondaryContact? : string;
}


export class KalturaAkamaiProvisionJobData extends KalturaProvisionJobData {

    wsdlUsername : string;
	wsdlPassword : string;
	cpcode : string;
	emailId : string;
	primaryContact : string;
	secondaryContact : string;

    constructor(data? : KalturaAkamaiProvisionJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAkamaiProvisionJobData' },
				wsdlUsername : { type : 's' },
				wsdlPassword : { type : 's' },
				cpcode : { type : 's' },
				emailId : { type : 's' },
				primaryContact : { type : 's' },
				secondaryContact : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAkamaiProvisionJobData',KalturaAkamaiProvisionJobData);
