
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryServerNodeStatus } from './KalturaEntryServerNodeStatus';
import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEntryServerNodeArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaEntryServerNode extends KalturaObjectBase {

    readonly id : number;
	readonly entryId : string;
	readonly serverNodeId : number;
	readonly partnerId : number;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	readonly status : KalturaEntryServerNodeStatus;
	readonly serverType : KalturaEntryServerNodeType;

    constructor(data? : KalturaEntryServerNodeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryServerNode' },
				id : { type : 'n', readOnly : true },
				entryId : { type : 's', readOnly : true },
				serverNodeId : { type : 'n', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaEntryServerNodeStatus, subType : 'KalturaEntryServerNodeStatus' },
				serverType : { type : 'es', readOnly : true, subTypeConstructor : KalturaEntryServerNodeType, subType : 'KalturaEntryServerNodeType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntryServerNode',KalturaEntryServerNode);
