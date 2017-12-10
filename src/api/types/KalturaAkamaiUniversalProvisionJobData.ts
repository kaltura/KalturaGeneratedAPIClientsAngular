
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDVRStatus } from './KalturaDVRStatus';
import { KalturaAkamaiUniversalStreamType } from './KalturaAkamaiUniversalStreamType';
import { KalturaProvisionJobData, KalturaProvisionJobDataArgs } from './KalturaProvisionJobData';

export interface KalturaAkamaiUniversalProvisionJobDataArgs  extends KalturaProvisionJobDataArgs {
    streamId? : number;
	systemUserName? : string;
	systemPassword? : string;
	domainName? : string;
	dvrEnabled? : KalturaDVRStatus;
	dvrWindow? : number;
	primaryContact? : string;
	secondaryContact? : string;
	streamType? : KalturaAkamaiUniversalStreamType;
	notificationEmail? : string;
}


export class KalturaAkamaiUniversalProvisionJobData extends KalturaProvisionJobData {

    streamId : number;
	systemUserName : string;
	systemPassword : string;
	domainName : string;
	dvrEnabled : KalturaDVRStatus;
	dvrWindow : number;
	primaryContact : string;
	secondaryContact : string;
	streamType : KalturaAkamaiUniversalStreamType;
	notificationEmail : string;

    constructor(data? : KalturaAkamaiUniversalProvisionJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAkamaiUniversalProvisionJobData' },
				streamId : { type : 'n' },
				systemUserName : { type : 's' },
				systemPassword : { type : 's' },
				domainName : { type : 's' },
				dvrEnabled : { type : 'en', subTypeConstructor : KalturaDVRStatus, subType : 'KalturaDVRStatus' },
				dvrWindow : { type : 'n' },
				primaryContact : { type : 's' },
				secondaryContact : { type : 's' },
				streamType : { type : 'es', subTypeConstructor : KalturaAkamaiUniversalStreamType, subType : 'KalturaAkamaiUniversalStreamType' },
				notificationEmail : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAkamaiUniversalProvisionJobData',KalturaAkamaiUniversalProvisionJobData);
