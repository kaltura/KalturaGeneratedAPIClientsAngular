
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConversionProfileStatus } from './KalturaConversionProfileStatus';
import { KalturaConversionProfileType } from './KalturaConversionProfileType';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaConversionProfileBaseFilterArgs  extends KalturaRelatedFilterArgs {
    idEqual? : number;
	idIn? : string;
	statusEqual? : KalturaConversionProfileStatus;
	statusIn? : string;
	typeEqual? : KalturaConversionProfileType;
	typeIn? : string;
	nameEqual? : string;
	systemNameEqual? : string;
	systemNameIn? : string;
	tagsMultiLikeOr? : string;
	tagsMultiLikeAnd? : string;
	defaultEntryIdEqual? : string;
	defaultEntryIdIn? : string;
}


export class KalturaConversionProfileBaseFilter extends KalturaRelatedFilter {

    idEqual : number;
	idIn : string;
	statusEqual : KalturaConversionProfileStatus;
	statusIn : string;
	typeEqual : KalturaConversionProfileType;
	typeIn : string;
	nameEqual : string;
	systemNameEqual : string;
	systemNameIn : string;
	tagsMultiLikeOr : string;
	tagsMultiLikeAnd : string;
	defaultEntryIdEqual : string;
	defaultEntryIdIn : string;

    constructor(data? : KalturaConversionProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConversionProfileBaseFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				statusEqual : { type : 'es', subTypeConstructor : KalturaConversionProfileStatus, subType : 'KalturaConversionProfileStatus' },
				statusIn : { type : 's' },
				typeEqual : { type : 'es', subTypeConstructor : KalturaConversionProfileType, subType : 'KalturaConversionProfileType' },
				typeIn : { type : 's' },
				nameEqual : { type : 's' },
				systemNameEqual : { type : 's' },
				systemNameIn : { type : 's' },
				tagsMultiLikeOr : { type : 's' },
				tagsMultiLikeAnd : { type : 's' },
				defaultEntryIdEqual : { type : 's' },
				defaultEntryIdIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConversionProfileBaseFilter',KalturaConversionProfileBaseFilter);
