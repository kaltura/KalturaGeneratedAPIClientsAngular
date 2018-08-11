
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryServerNode, KalturaDeliveryServerNodeArgs } from './KalturaDeliveryServerNode';

export interface KalturaEdgeServerNodeArgs  extends KalturaDeliveryServerNodeArgs {
    playbackDomain? : string;
}


export class KalturaEdgeServerNode extends KalturaDeliveryServerNode {

    playbackDomain : string;

    constructor(data? : KalturaEdgeServerNodeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEdgeServerNode' },
				playbackDomain : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEdgeServerNode'] = KalturaEdgeServerNode;