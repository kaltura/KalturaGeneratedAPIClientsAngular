
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaReportTableArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaReportTable extends KalturaObjectBase {

    readonly header : string;
	readonly data : string;
	readonly totalCount : number;

    constructor(data? : KalturaReportTableArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReportTable' },
				header : { type : 's', readOnly : true },
				data : { type : 's', readOnly : true },
				totalCount : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaReportTable',KalturaReportTable);
