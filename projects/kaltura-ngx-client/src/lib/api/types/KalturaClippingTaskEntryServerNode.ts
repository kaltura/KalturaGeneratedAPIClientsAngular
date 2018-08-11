
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaClipAttributes } from './KalturaClipAttributes';
import { KalturaTaskEntryServerNode, KalturaTaskEntryServerNodeArgs } from './KalturaTaskEntryServerNode';

export interface KalturaClippingTaskEntryServerNodeArgs  extends KalturaTaskEntryServerNodeArgs {
    clipAttributes? : KalturaClipAttributes;
	clippedEntryId? : string;
	liveEntryId? : string;
}


export class KalturaClippingTaskEntryServerNode extends KalturaTaskEntryServerNode {

    clipAttributes : KalturaClipAttributes;
	clippedEntryId : string;
	liveEntryId : string;

    constructor(data? : KalturaClippingTaskEntryServerNodeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaClippingTaskEntryServerNode' },
				clipAttributes : { type : 'o', subTypeConstructor : KalturaClipAttributes, subType : 'KalturaClipAttributes' },
				clippedEntryId : { type : 's' },
				liveEntryId : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaClippingTaskEntryServerNode'] = KalturaClippingTaskEntryServerNode;