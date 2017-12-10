
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeliveryServerNodeFilter, KalturaDeliveryServerNodeFilterArgs } from './KalturaDeliveryServerNodeFilter';

export interface KalturaEdgeServerNodeBaseFilterArgs  extends KalturaDeliveryServerNodeFilterArgs {
    playbackDomainLike? : string;
	playbackDomainMultiLikeOr? : string;
	playbackDomainMultiLikeAnd? : string;
}


export class KalturaEdgeServerNodeBaseFilter extends KalturaDeliveryServerNodeFilter {

    playbackDomainLike : string;
	playbackDomainMultiLikeOr : string;
	playbackDomainMultiLikeAnd : string;

    constructor(data? : KalturaEdgeServerNodeBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEdgeServerNodeBaseFilter' },
				playbackDomainLike : { type : 's' },
				playbackDomainMultiLikeOr : { type : 's' },
				playbackDomainMultiLikeAnd : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEdgeServerNodeBaseFilter',KalturaEdgeServerNodeBaseFilter);
