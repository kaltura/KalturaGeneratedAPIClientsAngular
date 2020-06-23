
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaInteractivityRootFilter } from './KalturaInteractivityRootFilter';
import { KalturaInteractivityNodeFilter } from './KalturaInteractivityNodeFilter';
import { KalturaInteractivityInteractionFilter } from './KalturaInteractivityInteractionFilter';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaInteractivityDataFilterArgs  extends KalturaObjectBaseArgs {
    rootFilter? : KalturaInteractivityRootFilter;
	nodeFilter? : KalturaInteractivityNodeFilter;
	interactionFilter? : KalturaInteractivityInteractionFilter;
}


export class KalturaInteractivityDataFilter extends KalturaObjectBase {

    rootFilter : KalturaInteractivityRootFilter;
	nodeFilter : KalturaInteractivityNodeFilter;
	interactionFilter : KalturaInteractivityInteractionFilter;

    constructor(data? : KalturaInteractivityDataFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaInteractivityDataFilter' },
				rootFilter : { type : 'o', subTypeConstructor : KalturaInteractivityRootFilter, subType : 'KalturaInteractivityRootFilter' },
				nodeFilter : { type : 'o', subTypeConstructor : KalturaInteractivityNodeFilter, subType : 'KalturaInteractivityNodeFilter' },
				interactionFilter : { type : 'o', subTypeConstructor : KalturaInteractivityInteractionFilter, subType : 'KalturaInteractivityInteractionFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaInteractivityDataFilter'] = KalturaInteractivityDataFilter;