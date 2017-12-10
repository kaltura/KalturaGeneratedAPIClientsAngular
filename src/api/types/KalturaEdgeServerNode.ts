
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeliveryServerNode, KalturaDeliveryServerNodeArgs } from './KalturaDeliveryServerNode';

export interface KalturaEdgeServerNodeArgs  extends KalturaDeliveryServerNodeArgs {
    playbackDomain? : string;
	config? : string;
}


export class KalturaEdgeServerNode extends KalturaDeliveryServerNode {

    playbackDomain : string;
	config : string;

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
				playbackDomain : { type : 's' },
				config : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEdgeServerNode',KalturaEdgeServerNode);
