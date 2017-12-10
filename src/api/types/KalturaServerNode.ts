
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaServerNodeStatus } from './KalturaServerNodeStatus';
import { KalturaServerNodeType } from './KalturaServerNodeType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaServerNodeArgs  extends KalturaObjectBaseArgs {
    name? : string;
	systemName? : string;
	description? : string;
	hostName? : string;
	tags? : string;
	parentId? : string;
}


export class KalturaServerNode extends KalturaObjectBase {

    readonly id : number;
	readonly partnerId : number;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	readonly heartbeatTime : Date;
	name : string;
	systemName : string;
	description : string;
	hostName : string;
	readonly status : KalturaServerNodeStatus;
	readonly type : KalturaServerNodeType;
	tags : string;
	readonly dc : number;
	parentId : string;

    constructor(data? : KalturaServerNodeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaServerNode' },
				id : { type : 'n', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				heartbeatTime : { type : 'd', readOnly : true },
				name : { type : 's' },
				systemName : { type : 's' },
				description : { type : 's' },
				hostName : { type : 's' },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaServerNodeStatus, subType : 'KalturaServerNodeStatus' },
				type : { type : 'es', readOnly : true, subTypeConstructor : KalturaServerNodeType, subType : 'KalturaServerNodeType' },
				tags : { type : 's' },
				dc : { type : 'n', readOnly : true },
				parentId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaServerNode',KalturaServerNode);
