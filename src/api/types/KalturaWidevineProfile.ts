
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDrmProfile, KalturaDrmProfileArgs } from './KalturaDrmProfile';

export interface KalturaWidevineProfileArgs  extends KalturaDrmProfileArgs {
    key? : string;
	iv? : string;
	owner? : string;
	portal? : string;
	maxGop? : number;
	regServerHost? : string;
}


export class KalturaWidevineProfile extends KalturaDrmProfile {

    key : string;
	iv : string;
	owner : string;
	portal : string;
	maxGop : number;
	regServerHost : string;

    constructor(data? : KalturaWidevineProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWidevineProfile' },
				key : { type : 's' },
				iv : { type : 's' },
				owner : { type : 's' },
				portal : { type : 's' },
				maxGop : { type : 'n' },
				regServerHost : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWidevineProfile',KalturaWidevineProfile);
