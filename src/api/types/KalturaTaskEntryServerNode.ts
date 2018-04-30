
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryServerNode, KalturaEntryServerNodeArgs } from './KalturaEntryServerNode';

export interface KalturaTaskEntryServerNodeArgs  extends KalturaEntryServerNodeArgs {
    
}


export class KalturaTaskEntryServerNode extends KalturaEntryServerNode {

    

    constructor(data? : KalturaTaskEntryServerNodeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTaskEntryServerNode' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTaskEntryServerNode',KalturaTaskEntryServerNode);
