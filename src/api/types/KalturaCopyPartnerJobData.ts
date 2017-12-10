
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaCopyPartnerJobDataArgs  extends KalturaJobDataArgs {
    fromPartnerId? : number;
	toPartnerId? : number;
}


export class KalturaCopyPartnerJobData extends KalturaJobData {

    fromPartnerId : number;
	toPartnerId : number;

    constructor(data? : KalturaCopyPartnerJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCopyPartnerJobData' },
				fromPartnerId : { type : 'n' },
				toPartnerId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCopyPartnerJobData',KalturaCopyPartnerJobData);
