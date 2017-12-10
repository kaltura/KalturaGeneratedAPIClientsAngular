
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDrmProviderType } from './KalturaDrmProviderType';
import { KalturaDrmProfileStatus } from './KalturaDrmProfileStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaDrmProfileBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	idIn? : string;
	partnerIdEqual? : number;
	partnerIdIn? : string;
	nameLike? : string;
	providerEqual? : KalturaDrmProviderType;
	providerIn? : string;
	statusEqual? : KalturaDrmProfileStatus;
	statusIn? : string;
}


export class KalturaDrmProfileBaseFilter extends KalturaFilter {

    idEqual : number;
	idIn : string;
	partnerIdEqual : number;
	partnerIdIn : string;
	nameLike : string;
	providerEqual : KalturaDrmProviderType;
	providerIn : string;
	statusEqual : KalturaDrmProfileStatus;
	statusIn : string;

    constructor(data? : KalturaDrmProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDrmProfileBaseFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				partnerIdEqual : { type : 'n' },
				partnerIdIn : { type : 's' },
				nameLike : { type : 's' },
				providerEqual : { type : 'es', subTypeConstructor : KalturaDrmProviderType, subType : 'KalturaDrmProviderType' },
				providerIn : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaDrmProfileStatus, subType : 'KalturaDrmProfileStatus' },
				statusIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDrmProfileBaseFilter',KalturaDrmProfileBaseFilter);
