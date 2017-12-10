
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCategoryBaseFilter, KalturaCategoryBaseFilterArgs } from './KalturaCategoryBaseFilter';

export interface KalturaCategoryFilterArgs  extends KalturaCategoryBaseFilterArgs {
    freeText? : string;
	membersIn? : string;
	nameOrReferenceIdStartsWith? : string;
	managerEqual? : string;
	memberEqual? : string;
	fullNameStartsWithIn? : string;
	ancestorIdIn? : string;
	idOrInheritedParentIdIn? : string;
}


export class KalturaCategoryFilter extends KalturaCategoryBaseFilter {

    freeText : string;
	membersIn : string;
	nameOrReferenceIdStartsWith : string;
	managerEqual : string;
	memberEqual : string;
	fullNameStartsWithIn : string;
	ancestorIdIn : string;
	idOrInheritedParentIdIn : string;

    constructor(data? : KalturaCategoryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryFilter' },
				freeText : { type : 's' },
				membersIn : { type : 's' },
				nameOrReferenceIdStartsWith : { type : 's' },
				managerEqual : { type : 's' },
				memberEqual : { type : 's' },
				fullNameStartsWithIn : { type : 's' },
				ancestorIdIn : { type : 's' },
				idOrInheritedParentIdIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryFilter',KalturaCategoryFilter);
